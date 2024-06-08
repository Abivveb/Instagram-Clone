import React from 'react'
import './createPostModal.scss'

export const CreatePostModal = () => {
    const aspectRatios = [
        {id: 1, title: 'Оригинал', url:'<svg aria-label="Значок контура фото" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Значок контура фото</title><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fill-rule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>}'},
        {id: 1, title: '1:1', url: ''},
        {id: 1, title: '4:5', url: ''},
        {id: 1, title: '16:9', url: ''},
    ]

    const [selectedImg, setSelectedImg] = React.useState([])
    const [ind, setInd] = React.useState(0)
    const [showRatio, setShowRatio] = React.useState(false)
    let selectedImgs = selectedImg.length - 1

    console.log(selectedImgs)
    console.log(ind)

    const slideFunction = () => {
        if(ind > selectedImgs){
            setInd(0)
        }else if(ind < 0){
            setInd(selectedImgs)
        }
    }

    const slideLeft = () => {
        if(ind == 0){
          console.log('start')
        }else{
          setInd(ind - 1)
          slideFunction()
        }
      }
    
      const slideRight = () => {
        if(ind == selectedImgs){
          console.log('end')
        }else{
          setInd(ind + 1)
          slideFunction()
        }
      }

    const renderFiles = (e) => {
        
        
        const files = [...e.target.files]

        const promisedFiles = files.map(file => {
            return new Promise((res, rej) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)

                reader.onload = () => {
                    res(reader.result)
                }
            })
        })
        Promise.all(promisedFiles)
            .then(result => {
                setSelectedImg(result)
            })

    }



  return (
    <div className="create-post-modal">
        <div className="create-post-modal__content">
            {
                selectedImg.length === 0 ? 
                <>
                <div style={{justifyContent: 'center'}} className="create-post-modal__header">
                    <div className="create-post-modal__name">Create post</div>
                </div>
                <div className="create-post-modal__svg">
                    <svg aria-label="Значок, соответствующий медиафайлам, например изображениям или видео" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Значок, соответствующий медиафайлам, например изображениям или видео</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                </div>
                <div className="create-post-modal__text">Drag and Drop here photos and videos</div>
                <input onChange={renderFiles}
                multiple
                type="file" name="" id="file" />
                <button><label htmlFor="file">Choose file</label></button>
                </> 
                : 
                <>
                <div className="create-post-modal__header">
                    <div className="create-post-modal__back">
                        <svg aria-label="Назад" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Назад</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                    </div>
                    <div className="create-post-modal__name">Create post</div>
                    <div className="create-post-modal__next">Далее</div>
                </div>
                <div className="create-post-modal__cut">
                    {
                        showRatio ? 
                        <div className="create-post-modal__ratioModal">
                            {
                                aspectRatios.map(ratio => (
                                    <div className="create-post-modal__ratioModal-ratio">
                                        <span>{ratio.title}</span>
                                        <img src={ratio.url} alt="" />
                                    </div>
                                ))
                            }
                        </div> : false
                    }
                    <div className="create-post-modal-btn">
                        <div style={{
                            visibility: ind == 0 ? 'hidden' : 'visible'
                        }}
                         onClick={slideLeft} className="create-post-modal__btn-left">
                            <svg aria-label="Стрелка вправо" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Стрелка вправо</title><polyline fill="none" points="8 3 17.004 12 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                        </div>
                        <div style={{
                            visibility: ind == selectedImgs ? 'hidden' : 'visible'
                        }}
                        onClick={slideRight} className="create-post-modal__btn-right">
                            <svg aria-label="Стрелка вправо" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Стрелка вправо</title><polyline fill="none" points="8 3 17.004 12 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                        </div>

                        <div onClick={() => setShowRatio(!showRatio)} className="create-post-modal__btn-size" >
                            <svg aria-label="Выбрать размер и обрезать" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Выбрать размер и обрезать</title><path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path></svg>
                        </div>

                        <div className="create-post-modal__btn-zoom">
                            <svg aria-label="Выбрать тип увеличения" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Выбрать тип увеличения</title><path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path></svg>
                        </div>
                        <div className="create-post-modal__btn-media-gallery">
                            <svg aria-label="Открыть медиагалерею" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Открыть медиагалерею</title><path d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z" fill-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    
                    <div style={{
                        transform: `translateX(${-ind * 450}px)`
                    }}
                    className="create-post-modal__gallery">
                        {
                        selectedImg.map(img => (
                            <img src={img} alt="" />
                        ))
                        }
                    </div>
                </div>
                </>

                
            }
        </div>
    </div>
  )
}
