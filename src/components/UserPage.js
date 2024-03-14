import React, { useState } from "react"
import { generatePrompt } from "../utils/GeneratePrompt"
import { runChat } from "./GeminiAiIntegration"

const CourseForm = ({ setVideoUrls, setLoading }) => {
  const [formData, setFormData] = useState({
    courseName: "",
    levelOfKnowledge: "",
    topicFamiliar: "",
    topicInterested: "",
    projectOrCourseBased: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const extractLinks = (text) => {
    const regex = /(https?:\/\/[^\s]+)/g
    const matches = text.match(regex)
    return matches || []
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    console.log(formData)
    const prompt = generatePrompt(formData)

    const result = await runChat(prompt)

    const videoUrls = extractLinks(result)
    console.log(videoUrls, "videoUrls")

    setVideoUrls(videoUrls)
    setLoading(false)
  }

  return (
    <div className="max-w-[450px] sm:w-[450px]">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center text-2xl font-semibold pb-3">Enter basic details</div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courseName"
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Enter Course Name ( For e.g., Python )"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="levelOfKnowledge">
            Level of Knowledge:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="levelOfKnowledge"
            type="text"
            name="levelOfKnowledge"
            value={formData.levelOfKnowledge}
            onChange={handleChange}
            placeholder="Enter Level of Knowledge ( For e.g., Beginner )"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicFamiliar">
            Topic Familiar:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topicFamiliar"
            type="text"
            name="topicFamiliar"
            value={formData.topicFamiliar}
            onChange={handleChange}
            placeholder="Enter Topic Familiar"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicInterested">
            Topic Interested:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topicInterested"
            type="text"
            name="topicInterested"
            value={formData.topicInterested}
            onChange={handleChange}
            placeholder="Enter Topic Interested"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectOrCourseBased">
            Project or Course Based:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectOrCourseBased"
            type="text"
            name="projectOrCourseBased"
            value={formData.projectOrCourseBased}
            onChange={handleChange}
            placeholder="Enter Project or Course Based"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CourseForm
