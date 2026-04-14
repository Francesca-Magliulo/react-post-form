import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function PostForm() {

    const initialFormData = {
        author: "",
        title: "",
        body: "",
        public: false
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData(initialFormData)
    }


    return (

        <div className="container mt-5">
            <h1 className="mb-4">Post Form</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        name="body"
                        rows="4"
                        value={formData.body}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="public"
                        checked={formData.public}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        Public
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    Crea Post
                </button>

            </form>
        </div>
    )

}




export default PostForm