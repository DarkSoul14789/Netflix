import React from 'react'
import './watch.scss'
import {ArrowBackOutlined} from '@mui/icons-material'

const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src="https://stream.mux.com/fh7ZhGajjSqobZBXEpOUfWsALSzlgLkg/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTEyNjk0MzcsImF1ZCI6InYiLCJzdWIiOiJmaDdaaEdhampTcW9iWkJYRXBPVWZXc0FMU3psZ0xrZyJ9.a3OAu14Wyx3fiA59V2A1m6M1zU17UdUVkkEVhISjgXYJgkICAWWvce7RW4t8GQ8D75HLDp8CbFBHd9vXVUsvjVhF7d356KCizdeYYTGriWNhwNFqvGVFItf9HRnuwgPH4bGKTQwp9hHerJ6LfBjbh4W7UshmoN2DjECoW3WVUtVQD3ftpJizwATNg31yseoCAMXx8dBomvbMRnSbVw8pepZLB3G2vJd9wRP48mQXp9dZ5qta6KUILmjx5olyBvWYCKWlyrXeP30yKw1Px35pQky2T5KfCxxaMWfOFovqSb-BbBhYl_Xg3egrW4kExRX-LLR8nEriefpn8dpfo5rUCA" className="video" autoPlay progress controls/>
    </div>
  )
}

export default Watch