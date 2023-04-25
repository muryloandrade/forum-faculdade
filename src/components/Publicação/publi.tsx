import { Profile, Publication,ProfilePhoto,Content,ContentTwo } from "./publi-styled"

export const Publi = () => {
    return (
        <Publication>
            <Profile>
                <ProfilePhoto  src="https://avatars.githubusercontent.com/u/59853942?v=4" alt="Profile" />
                <h1>João da Silva</h1>
            </Profile>
            <ContentTwo>

            <Content>
                    <h1>Publicação</h1>
            </Content>
            </ContentTwo>
        </Publication>
    )
}