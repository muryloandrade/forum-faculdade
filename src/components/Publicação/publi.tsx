import { useEffect, useState } from "react";
import {
  Profile,
  Publication,
  ProfilePhoto,
  Information,
} from "./publi-styled";
import axios from "axios";

interface Users {
  nameUser: string;
  date: string;
  role: string;
  Course: string;
  content: string;
  photo: string;
  likes: number;
  id: number;
  image: "";
}

interface IPubli {
  get: boolean;
}

export const Publi: React.FC<IPubli> = ({ get }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:7010/posts");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    if (get) {
      fetchPosts();
    }

    const checkForNewPosts = setInterval(() => {
      if (get) {
        fetchPosts();
      }
    }, 1000);

    return () => {
      clearInterval(checkForNewPosts);
    };
  }, [get]);

  useEffect(() => {
    axios.get("http://localhost:7010/posts").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const posts = [...users].reverse();
  return (
    <>
      {posts.map((user) => (
        <Publication key={user.id}>
          <Profile>
            <ProfilePhoto
              src={user.photo}
              className="rounded-circle"
              alt="Profile"
            />
            <Information>
              <h2>{user.nameUser}</h2>
              <h1>
                {user.role} de {user.Course}
              </h1>
            </Information>
          </Profile>
          <div>
            <p className="lh-1">{user.content}</p>
            {user.image !== "" ? <img src={user.image} alt="Post" /> : ""}
          </div>
        </Publication>
      ))}
    </>
  );
};
