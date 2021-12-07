const PhotoHolder = ({src="", caption="",alt={caption}, className="text-warm-dark"}) => {
  return (
    <div className={className}>
    <div className="max-w-full sm:max-w-3xl flex flex-col">
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain shadow-xl" style={{border: "1.5px solid #A4A4A4", borderRadius:"7px"}}/>
  <div className="captions lg:captions-lg text-right">
    {caption}
  </div>
    </div>
  </div>
  )
}

export default PhotoHolder
