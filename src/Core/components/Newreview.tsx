import {FormEvent, RefObject, useEffect, useRef, useState} from "react";
import {useAction} from "../hooks/usaAction";

const Newreview = () => {
    const [file, setFile] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()

    const [textArea, setTextArea] = useState('')
    const {setIsPageNewReview, postReview} = useAction()
    const [inputName, setInputName] = useState('')
    const handlerSubmit = (event: FormEvent): void => {
        event.preventDefault()
        postReview({
            userName: inputName,
            text: textArea,
            date: new Date().toLocaleDateString(),
            img: preview
        })
        setTextArea('')
        setInputName('')
        setIsPageNewReview(false)
        setFile(null)
    }
    useEffect(
        () => {
            if (file) {
                const reader = new FileReader()
                reader.onloadend = () => {
                    setPreview(reader.result as string)
                }
                reader.readAsDataURL(file)
            } else {
                setPreview(null)
            }
        },
        [file]
    )
    return (

        <div className='newReview'>
            <div className="newReview__body">
                <div className="newReview__title">
                    <h2>Отзыв</h2>
                    <button onClick={() => setIsPageNewReview(false)}><img src="/images/gcross.svg" alt=""/></button>
                </div>
                <form className='newReview__inputs' onSubmit={handlerSubmit}>
                    <h3>Как вас зовут?</h3>
                    <div className='newReview__sub-inputs'>
                        <input type="text" placeholder='Имя Фамилия' value={inputName}
                               className='newReview__input-name'
                               onChange={event => setInputName(event.target.value)}
                               required
                        />

                        <button type='button'>+ Загрузить фото
                            <input
                                type="file" accept='image/*'
                                className='newReview__input-photo'
                                maxLength={2}
                                onChange={event => {
                                    const files: any = event.target.files
                                    if (files[0]&&files[0].type.substr(0,5)==='image'){
                                        setFile(files[0])
                                    } else {
                                        setFile(null)
                                        alert('Не верный формат файла или он отсутствует')
                                    }
                                }}
                            />
                        </button>
                    </div>
                    {preview&& <div className="newReview__input-prev">
                       <img src={preview} alt=""/>
                        <div className="newReview__input-prev-info">
                           <p>{file?.name}</p>
                            <button type='button' onClick={()=>setFile(null)}><img src="/images/Delete.svg" alt=""/></button>
                        </div>
                    </div>}
                    <h3>Все ли вам понравилось?</h3>
                    <div className='newReview__inputReview'>
                        <textarea
                            maxLength={200}
                            placeholder='Напишите пару слов о вашем опыте...'
                            onChange={event => setTextArea(event.target.value)}
                            value={textArea}
                            required

                        />
                        <div className="newReview__text-length"> {textArea.length}/200</div>

                    </div>
                    <div className='newReview__footer'>
                        <button type='submit'>Отправить отзыв</button>

                        <p><img src="/images/simvol.svg" alt=""/> Все отзывы проходят модерацию в течение 2 часов</p>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Newreview