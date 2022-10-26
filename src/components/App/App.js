import { Button } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import { ModalChild } from "components/Modal/ModalChild";
import { Searchbar } from "components/Searchbar/Searchbar";
import { SearchForm } from "components/Searchbar/SearchForm";
import { fetchImages } from "fetch/fetchImages";
import { useEffect, useState } from "react";


export const AppBox = () => {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [pictures, setPictures] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalSrc, setModalSrc] = useState("")
    const [status, setStatus] = useState("idle")
    const [totalHits, setTotalHits] = useState(0)

    useEffect(() => {
        if (query === "") {
            return
        }
        setStatus("pending")
    },[query]
    )

    useEffect(() => {
        if (query === "") {
            return
        }
        fetchImages(query, page)
            .then(response => {
                const results = response.data.hits
                setPictures(pictures => ([...pictures, ...results]))
                setTotalHits(response.data.totalHits)
                setStatus("resolved")
            })
            .catch(error => {
                console.log(error)
                setStatus("rejected")
        })
    }, [query, page]
    )

    const submitInfo = (evt) => {
        evt.preventDefault()
        if (evt.target.elements.query.value === "") {
            alert("Please, enter something")
        } else {
            setQuery(evt.target.elements.query.value)
            setPage(1)
            setPictures([])
        }
    }

    const loadMore = (evt) => {
        evt.preventDefault()
        setPage(page+1)
    }

    const toggleModal = (evt) => {
        setShowModal(!showModal)
    }

    const openModalImage = (evt) => {
        evt.preventDefault()
        toggleModal()
        setModalSrc(evt.target.dataset.src)
    }
    
        return (
            <>
                <Searchbar>
                    <SearchForm onSubmit={submitInfo}/>
                </Searchbar>

                {status === "pending" && 
                    <Loader />}
                
                {status === "resolved" &&
                    <>
                    <ImageGallery imagesArray={pictures} openModalImage={openModalImage} query={query} />
                    {pictures.length !== 0 && pictures.length < totalHits && <Button loadMore={loadMore} />}
                    </>
                }
                
                {showModal &&
                    <Modal closeModal={toggleModal}>
                        <ModalChild modalSrc={modalSrc} query={query}/>
                    </Modal>
                }
            </>
        )
    }
