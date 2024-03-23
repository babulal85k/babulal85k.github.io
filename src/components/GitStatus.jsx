import React from 'react';
import  "./GitStatus.css";

const GitStatus = () => {
    return (
        <>
            <div className="gitstatus">
                <h2 align="center">GIT STATUS</h2>
                <p align="center">
                    <img src="https://komarev.com/ghpvc/?username=babulal85k&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
                </p>
                <p align="center">
                    <a href="https://github.com/ryo-ma/github-profile-trophy">
                        <img src="https://github-profile-trophy.vercel.app/?username=babulal85k" alt="GitHub Trophies" />
                    </a>
                </p>

                <p align="center">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=babulal85k&show_icons=true&locale=en&layout=compact" alt="Top Languages" />
                </p>

                <p align="center">
                    <img src="https://github-readme-stats.vercel.app/api?username=babulal85k&show_icons=true&locale=en" alt="GitHub Stats" />
                </p>

                <p align="center">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=babulal85k&" alt="GitHub Streak" />
                </p>
            </div>
        </>
    )
}

export default GitStatus;