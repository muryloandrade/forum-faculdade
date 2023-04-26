import { Profile, Publication, ProfilePhoto, Content, Information,Text } from "./publi-styled"

export const Publi = () => {
    return (
        <Publication>
            <Profile>
                <ProfilePhoto src="https://avatars.githubusercontent.com/u/104404496?v=4" alt="Profile" />
                <Information>
                    <h2>Murylo Andrade Silva</h2>
                    <h1>Aluno de Sistemas de Informação</h1>
                </Information>

            </Profile>
            <Content>
                <Text>

                    <h1>hoje eu tive a oportunidades de conhecer o joaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao.</h1>
                </Text>
            </Content>
        </Publication>
    )
}