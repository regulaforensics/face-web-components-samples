import * as React from "react";
import {
  FaceEnrollDetailType,
  FaceEnrollResponseType,
  FaceEnrollWebComponent,
  FaceVerifyDetailType,
  FaceVerifyResponseType,
  FaceVerifyWebComponent,
} from "@regulaforensics/vp-frontend-face-components";
import "@regulaforensics/vp-frontend-face-components";
import "./App.css";

const containerStyle = {
  display: "flex",
  gap: "24px",
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;

const buttonStyle = {
  padding: "10px 30px",
  color: "white",
  fontSize: "16px",
  borderRadius: "2px",
  backgroundColor: "#bd7dff",
  border: "1px solid #bd7dff",
  cursor: "pointer",
} as React.CSSProperties;

const buttonContainerStyle = {
  display: "flex",
  gap: "12px",
} as React.CSSProperties;

const resultTextStyle = {
  maxWidth: "250px",
  fontSize: "14px",
  color: "#333",
  margin: 0,
} as React.CSSProperties;

const resultContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
} as React.CSSProperties;

function App() {
  const [openComponent, setOpenComponent] = React.useState<
    "enroll" | "verify" | null
  >(null);
  const [personId, setPersonId] = React.useState<string>("");
  const [enrollResponse, setEnrollResponse] =
    React.useState<FaceEnrollResponseType | null>(null);
  const [verifyResponse, setVerifyResponse] =
    React.useState<FaceVerifyResponseType | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const enrollComponentRef = React.useRef<FaceEnrollWebComponent | null>(null);
  const verifyComponentRef = React.useRef<FaceVerifyWebComponent | null>(null);

  const enrollListener = (data: CustomEvent<FaceEnrollDetailType>) => {
    if (data.detail.action === "PROCESS_FINISHED") {
      if (data.detail.data?.status === 1 && data.detail.data.response) {
        console.log(data.detail.data.response);
        setPersonId(data.detail.data.response.enrollResult?.person?.id || "");
        setEnrollResponse(data.detail.data.response);
      }
    }

    if (
      data.detail?.action === "CLOSE" ||
      data.detail?.action === "RETRY_COUNTER_EXCEEDED"
    ) {
      setOpenComponent(null);
    }
  };

  const verifyListener = (data: CustomEvent<FaceVerifyDetailType>) => {
    if (data.detail.action === "PROCESS_FINISHED") {
      if (data.detail.data?.status === 1 && data.detail.data.response) {
        console.log(data.detail.data.response);
        setVerifyResponse(data.detail.data.response);
      }
    }

    if (
      data.detail?.action === "CLOSE" ||
      data.detail?.action === "RETRY_COUNTER_EXCEEDED"
    ) {
      setOpenComponent(null);
    }
  };

  React.useEffect(() => {
    if (openComponent === "enroll" && enrollComponentRef.current) {
      enrollComponentRef.current.settings = {
        enroll: {
          person: {}, // person with empty object will be created with default settings (groups - default value is empty array)
        },
        customization: {
          onboardingScreenStartButtonBackground: "#5b5050",
        },
      };
    }
  }, [openComponent]);

  React.useEffect(() => {
    if (openComponent === "verify" && verifyComponentRef.current) {
      verifyComponentRef.current.settings = {
        verify: {
          personId: personId, // personId is required
        },
        customization: {
          onboardingScreenStartButtonBackground: "#5b5050",
        },
      };
    }
  }, [openComponent, personId]);

  React.useEffect(() => {
    const containerCurrent = containerRef.current;

    if (!containerCurrent) return;
    containerCurrent.addEventListener("face-enroll", enrollListener);
    containerCurrent.addEventListener("face-verify", verifyListener);

    return () => {
      containerCurrent.removeEventListener("face-enroll", enrollListener);
      containerCurrent.removeEventListener("face-verify", verifyListener);
    };
  }, []);

  return (
    <div style={containerStyle} ref={containerRef}>
      {!openComponent && (
        <div style={resultContainerStyle}>
          {enrollResponse && enrollResponse.enrollResult && (
            <div>
              <h4 style={resultTextStyle}>Enroll info: </h4>
              <img
                src={`data:image/jpeg;base64,${enrollResponse.images[0]}`}
                style={{ width: "300px", height: "auto" }}
              />
              <p style={resultTextStyle}>
                Enrolled: {String(enrollResponse.enrollResult?.enrolled)}
              </p>
              <p style={resultTextStyle}>
                Person ID: {enrollResponse.enrollResult?.person?.id}
              </p>
              <p style={resultTextStyle}>
                Person name: {enrollResponse.enrollResult?.person?.name}
              </p>
            </div>
          )}
          {verifyResponse && verifyResponse.verifyResult && (
            <div>
              <h4 style={resultTextStyle}>Verification info: </h4>
              <p style={resultTextStyle}>
                Verified: {String(verifyResponse.verifyResult?.verified)}
              </p>
              <p style={resultTextStyle}>
                Similarity: {verifyResponse.verifyResult?.match?.similarity}
              </p>
            </div>
          )}

          <input
            type="text"
            placeholder="Person ID"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />

          <div style={buttonContainerStyle}>
            <button
              style={buttonStyle}
              onClick={() => setOpenComponent("enroll")}
            >
              Open enroll
            </button>

            <button
              style={buttonStyle}
              onClick={() => {
                if (!personId) {
                  alert("Please enter a person ID or enroll a new person");
                  return;
                }
                setOpenComponent("verify");
              }}
            >
              Open verify
            </button>
          </div>
        </div>
      )}

      {openComponent === "enroll" && (
        <face-enroll ref={enrollComponentRef}></face-enroll>
      )}
      {openComponent === "verify" && (
        <face-verify ref={verifyComponentRef}></face-verify>
      )}
    </div>
  );
}

export default App;
