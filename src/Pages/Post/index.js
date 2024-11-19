import './Post.css'
import { Route, Routes, useParams } from "react-router-dom"
import posts from "assets/json/posts.json";
import PostModel from "Components/PostModel";
import Markdown from "react-markdown";
import DefaultPage from 'Components/DefaultPage';
import NotFound from 'Pages/NotFound';

export default function Post() {
    const params = useParams();
    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NotFound/>
    }

    return (
    
        <Routes>
            <Route path="*" element={<DefaultPage/>}>
                <Route index element={
                    <PostModel
                        coverPhoto={`/assets/posts/${post.id}/capa.png`}
                        title={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <Markdown>
                                {post.texto}
                            </Markdown>
                        </div>
                    </PostModel>
                } />
            </Route>
        </Routes>

    )
}