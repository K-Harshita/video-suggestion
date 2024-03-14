import { useState } from "react"
import UserPage from "./components/UserPage"
import VideoPlayer from "./components/VideoPlayer"

function App() {
  const [videoUrls, setVideoUrls] = useState([])

  const [loading, setLoading] = useState(false)

  // const fun1 = async () => {
  //   var data1 = []
  //   const querySnapshot = await getDocs(collection(db, "ajay"))
  //   console.log(querySnapshot)
  //   querySnapshot.forEach((doc) => {
  //     data1.push(doc.data())
  //   })
  //   console.log(data1, "data1")
  //   setVideoUrls(data1)
  // }

  // useEffect(() => {
  //   fun1()
  // }, [])

  return (
    <div className="flex gap-10 my-14 mx-10 flex-col sm:flex-row">
      {/* <GeminiIntegration /> */}
      <UserPage setVideoUrls={setVideoUrls} setLoading={setLoading} />

      {loading && (
        <div className="flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-y-4 border-gray-400" />
        </div>
      )}

      {videoUrls?.length > 0 && (
        <div>
          <div className="font-semibold pb-5 text-2xl">Your recommended videos</div>
          <div className="flex gap-5 flex-col lg:flex-row">
            <div className="flex flex-col gap-1">
              <p>Long video</p>
              <VideoPlayer videoUrl={videoUrls?.[0]} />
            </div>
            <div className="flex flex-col gap-1">
              <p>Short video</p>
              <VideoPlayer videoUrl={videoUrls?.[1]} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
