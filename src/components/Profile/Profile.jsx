import css from './Profile.module.css'
export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={css.card}>
        <div className={css.cardInfo}>
            <img className={css.cardImg}
         src={image}
                    alt="User avatar"
         />
         <p className={css.nameText}>{name}</p>
                <p className={css.tagText}>@{tag}</p>
                <p className={css.tagText}>{location}</p>
         </div>
         </div>
    );
};
