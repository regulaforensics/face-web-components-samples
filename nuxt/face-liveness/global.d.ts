declare global {
    interface HTMLElementEventMap {
        'face-liveness': CustomEvent<FaceLivenessDetailType>;
    }
}

