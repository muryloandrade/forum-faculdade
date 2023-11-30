import { useCallback, useEffect, useState } from "react";
import {
  Profile,
  Publication,
  ProfilePhoto,
  Information,
} from "./publi-styled";
import axios from "axios";
// import { If } from "../../operators";

interface Users {
  nameUser: string;
  date: string;
  role: string;
  Course: string;
  content: string;
  photo: string;
  likes: number;
  id: "";
  image: "";
}

interface IPubli {
  get: boolean;
  coments: boolean;
  setComents: React.Dispatch<React.SetStateAction<boolean>>;
  setIdpost: React.Dispatch<React.SetStateAction<string>>;
}

export const Publi: React.FC<IPubli> = ({
  get,
  coments,
  setComents,
  setIdpost,
}) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [filter, setFilter] = useState<Users[]>([]);
  const [posts, setPosts] = useState<Users[]>([]);
  // const [loading, setLoading] = useState(true);
  
  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/4a711423-68c9-4539-a7d8-4acc74e285b8"
      );
      setUsers(JSON.parse(response.data.posts));
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (get) {
      getPosts();
    }

    const checkForNewPosts = setInterval(() => {
      if (get) {
        getPosts();
      }
    }, 1000);

    return () => {
      clearInterval(checkForNewPosts);
    };
  }, [get, getPosts]);

  const getUsers = useCallback(async () => {
    axios
      .get("https://mocki.io/v1/4a711423-68c9-4539-a7d8-4acc74e285b8")
      .then((response) => {
        setUsers(response.data.posts);
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleViewcoments = useCallback(
    (idPost: string) => {
      setComents(!coments);
      setIdpost(idPost);
    },
    [coments, setComents, setIdpost]
  );



  useEffect(() => {

  setPosts( [...users].reverse());
  const search = localStorage.getItem("search");
  if (search !== null) {
    
  setFilter(posts.filter((user) => {
    if (search !== "") {
      return user.content.includes(search as string);
    } else {
      return user;
    }
  }
  ));
}
else {
  setFilter(posts);
}
  }
  , [users, posts]);



  return (
    <>
      {filter.map((user) => (
        <Publication key={user.id}>
          <Profile>
            <ProfilePhoto
              src={user.photo}
              className="rounded-circle m-1"
              alt="Profile"
            />
            <Information className="">
              <h2>{user.nameUser}</h2>
              <h1>
                {user.role} de {user.Course}
              </h1>
            </Information>
          </Profile>
          <div>
            <p className="lh-1 mt-3">{user.content}</p>
            <div style={{ width: "100%" }}>
              {user.image !== "" ? (
                <img src={user.image} style={{ maxWidth: "80%" }} alt="Post" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              width: "fit-content",
            }}
            onClick={() => handleViewcoments(user.id)}
          >
            ver comentários
          </div>
        </Publication>
      ))}
      {/* <If condition={loading}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </If> */}
    </>
  );
};
