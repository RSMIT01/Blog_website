import React from 'react'
import "./create.css"
const Create = () => {
    return (
        <div className="create-new-blog">
            <img src="https://www.skillsportal.co.za/sites/default/files/field/image/deRfJz68gEUQ2VayR4DCyF-1200-80_0.jpg" alt="" className="blog-img" />
            <form className="form">
                <div className="form-parts">
                    <label htmlFor="fileinput">
                        <i className="fas fa-plus fileadd-icon"></i>
                    </label>
                    <input type="file" id="fileinput" style={{ display: "none" }} />
                    <input type="text" placeholder="Blog Title" className="text-input" autoFocus={true} />
                </div>
                <div className="form-parts">
                    <textarea placeholder="write your blog here..." className="text-input blog-text"></textarea>
                </div>
                <button className="post-blog">Publish</button>
            </form>
        </div>
    )
}

export default Create
