import { useState } from "react"
import ButtonLink from "../ButtonLinks"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    const [followText, setfollowText] = useState("Follow")

    function handClick(ev){
        alert("Você agora esta seguindo")
        setfollowText("Following")

    }


    return (
        <div className={styles.containerCard}>
            <img className={styles.avatar} src={avatar} alt={`Avatar de ${name}`} />

            <Title>

                <span>{name}</span>

                <button
                    className={styles.followButton}
                    onClick={handClick}
                >
                    {followText}
                </button>

            </Title>
            <hr className={styles.line} />

            <ProfileSection>{bio}</ProfileSection>
            <hr />

            <ProfileSection>{phone}</ProfileSection>
            <hr />

            <ProfileSection>{email}</ProfileSection>
            <hr />

            <div className={styles.containerButton}>
                <ButtonLink link={githubUrl} title="GitHub" />
                <ButtonLink link={linkedinUrl} title="LinkedIn" />
                <ButtonLink link={twitterUrl} title="Twitter" />
            </div>



        </div>


    )
}