import React from "react";

const RateLimitExceeded = ({ resetTime }) => {
    // Optional: resetTime can be a Date or timestamp of when the limit resets.
    const formattedTime = resetTime
        ? new Date(resetTime).toLocaleTimeString()
        : null;

    return (
        <div className="rate-limit-container">
            <div className="rate-limit-card">
                <div className="rate-limit-icon">⚠️</div>
                <h2 className="rate-limit-title">Rate Limit Exceeded</h2>
                <p className="rate-limit-text">
                    You’ve made too many requests to the API in a short period.
                </p>
                {formattedTime ? (
                    <p className="rate-limit-subtext">
                        Please try again after <strong>{formattedTime}</strong>.
                    </p>
                ) : (
                    <p className="rate-limit-subtext">
                        Please wait a minute and refresh the page.
                    </p>
                )}
                <button
                    className="rate-limit-button"
                    onClick={() => window.location.reload()}
                >
                    🔄 Refresh
                </button>
            </div>
        </div>
    );
};

export default RateLimitExceeded;