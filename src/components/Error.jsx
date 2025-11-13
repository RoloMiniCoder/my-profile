export default function Error({ errorMessage = 'Something went wrong!', description = 'Poopoo hit the fan.' }) {
    return (
        <div>
            <h2>{errorMessage}</h2>
            <p>{description}</p>
        </div>
    )
}