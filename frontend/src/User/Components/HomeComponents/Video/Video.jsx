import React, { useState } from 'react';
import axios from 'axios';

const Video = () => {
    const [videos, setVideos] = useState([]);

    const handleFileChange = (e) => {
        setVideos(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < videos.length; i++) {
            formData.append("videos", videos[i]);
        }
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:5000/api/postvideos", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data.message);
        } catch (err) {
            console.error("Error uploading videos", err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="video/*" multiple onChange={handleFileChange} />
                <button type="submit">Upload Videos</button>
            </form>
        </div>
    );
};

export default Video;
