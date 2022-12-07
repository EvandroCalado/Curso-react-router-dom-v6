import { Outlet, useParams,  } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return (
    <div>
      <h1>Post {params.id}</h1>
      <Outlet />
    </div>
  );
};

export default Post;
