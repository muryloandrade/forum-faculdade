import { useCallback, useEffect, useState } from "react";
import {
  Profile,
  Publication,
  ProfilePhoto,
  Information,
} from "./publi-styled";
import axios from "axios";
import { If } from "../../operators";

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
  const [loading, setLoading] = useState(true);

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92/posts"
      );
      setUsers(JSON.parse(response.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
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
      .get("https://mocki.io/v1/b83210eb-ca74-40fe-bfd8-6a321ae63e92")
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

  const posts = [...users].reverse();
  const search = localStorage.getItem("search");
  console.log(search);
  const filter = posts.filter((user) => {
    if (search !== null && search !== "") {
      return user.content.includes(search);
    } else {
      return user;
    }
  });
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
      <If condition={loading}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </If>
    </>
  );
};
