import React from "react";
import "./index.css";
import Avatar from '../../../../../../assets/images/profile/img.png';






export class ProfilePage extends React.Component {
    render() {
        return (
            <div class="profile-page">
                <div class="profile-page__header">
                    <img src={Avatar} alt="" className="profile-page__avatar"/>
                    <div className="profile-page__section-1">
                        <p>Gabriel Brown</p>
                        <p>@gabrielbr</p>
                        <p>Specialization</p>
                        <div className="profile-page__stats">
                            <div>
                                <p>Posts</p>
                                <p>31</p>
                            </div>
                            <div>
                                <p>Followers</p>
                                <p>621</p>
                            </div>
                            <div>
                                <p>Following</p>
                                <p>213</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-page__section-2">
                        <div> Description Description Description Description Description Description Description Description Description Description Description Description Description Description </div>
                    </div>
                </div>
                <div className="profile-page__posts"></div>
            </div>
        );

    }

}