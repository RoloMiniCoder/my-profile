import { useSearchParams } from "react-router-dom";

const categories = [
    'all',
    'books',
    'music',
    'movies',
    'tech',
    'notes',
]

function CategoryButton({ category }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const isActive = category === (searchParams.get('type') || 'all');

    const handleCategoryChange = () => {
        if (category === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ type: category });
        }
    };

    return (
        <button
            onClick={handleCategoryChange}
            type='button'
            className={`category-button ${isActive ? 'active' : ''}`}
        >
            {category.toUpperCase()}
        </button>
    )
}

export default function CategoryButtons() {
    return (
        <section className='blog-categories'>
            {categories.map(category => {
                return (<CategoryButton category={category} key={category} />)
            })}
        </section>
    )
}