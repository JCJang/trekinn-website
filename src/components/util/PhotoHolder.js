import ImageFadeIn from './ImageFadeIn';

const PhotoHolder = ({src="", caption="",alt={caption}, className="text-warm-dark"}) => {
  return (
    <div className={className}>
    <div className="max-w-full sm:max-w-3xl flex flex-col">
    <ImageFadeIn src={src} alt={alt} className="max-w-full max-h-full object-contain shadow-sm" style={{borderRadius:"2px"}}/>
  <div className="captions lg:captions-lg text-right mt-1">
    {caption}
  </div>
    </div>
  </div>
  )
}

export default PhotoHolder
