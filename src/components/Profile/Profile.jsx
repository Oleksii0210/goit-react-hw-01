import css from './Profile.module.css'
export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={css.card}>
        <div className={css.cardInfo}>
            <img className={css.cardImg}
             src={avatar} alt="User avatar"
         />
         <p className={css.nameText}>{username}</p>
                <p className={css.tagText}>@{tag}</p>
                <p className={css.tagText}>{location}</p>
         </div>
         </div>
    );
};
