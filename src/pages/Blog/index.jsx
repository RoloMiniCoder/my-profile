import { useSearchParams } from 'react-router-dom';

import DataStateWrapper from '../../components/DataStateWrapper';
import useDataFetching from "../../hooks/useDataFetching"
import CategoryButtons from './CategoryButtons';
import MarkdownRenderer from './MarkdownRenderer';

import './Blog.css'

function PostCard({ post }) {
    return (
        <section className="blog_content">
            <h3>{post.title}</h3>
            <MarkdownRenderer markdownText={post.content_body} />
            <br />
            <p><small>Post created at {post.created_at}</small></p>
        </section>)
}

export default function Blog() {
    const [searchParams] = useSearchParams();
    const currentCategory = searchParams.get('type') || 'all';

    let endpoint = '/posts';
    if (currentCategory !== 'all') {
        endpoint = `${endpoint}?type=${currentCategory}`;
    }

    const { data: posts, isLoading, error } = useDataFetching(endpoint);

    return (
        <>
            <CategoryButtons />
            <DataStateWrapper isLoading={isLoading} error={error}>
                {posts && (
                    posts.map(post => (
                        <PostCard post={post} key={post.id} />
                    )))}
            </DataStateWrapper>
        </>
    )
}