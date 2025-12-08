import useDataPollingFetching from "../../hooks/useDataPollingFetching";
import './Quote.css'

export default function Quote() {
    const { data, isLoading, error } = useDataPollingFetching(`/quotes`);

    return (
        <div id='quote'>
            {data && (
                <blockquote>
                    <p>{data.quote}</p>
                </blockquote>
            )}
        </div>)
}
