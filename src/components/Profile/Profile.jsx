import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img src="https://shoutcart.com/uploads/gig/bd6f3a23cd5294a2370b09bc413f3331.png" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={s.posts}>
                        <div className={s.item}>post 1</div>
                        <div className={s.item}>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;