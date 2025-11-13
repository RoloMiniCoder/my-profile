import LoadingSpinner from './LoadingSpinner';
import Error from './Error';

// Define the component responsible for rendering the UI state wrappers
export default function DataStateWrapper({ isLoading, error, children }) {
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <Error message={error.message || 'An unknown error occurred'} />;
    }

    // On success (not loading, no error), render the success content (children)
    return children;
}