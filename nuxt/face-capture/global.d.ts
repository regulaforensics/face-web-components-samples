declare global {
    interface HTMLElementEventMap {
        'face-capture': CustomEvent<FaceLivenessDetailType>;
    }
}

