import React from 'react'

const Home = () => {
    return (
        <>
            <div id="home">
                <div className="home-container">
                    <div className="image-cover">
                        <img className="profileImg" src="../assets/IMG_20240313_080808.jpg" alt="profile" />
                    </div>
                    <div className="welcome2">
                        <p>
                            <span className="quotes">My name is</span>
                            <br />
                            <span className="name"> Babu Lal Mandal </span>
                            <br />
                            <span className='disco'>Welcome to my digital showcase.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;