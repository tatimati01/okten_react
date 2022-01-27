import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDetails from "./components/UserDetails/UserDetails";
import UsersPostsPage from "./pages/UsersPostsPage/UsersPostsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";


function App() {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UsersPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>

        </div>
    );
}

export default App;
