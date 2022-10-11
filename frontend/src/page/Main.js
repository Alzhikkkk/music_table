import View from '../components/View';
import { Select , Button , Input, Modal} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useState, useEffect } from "react";
import { createSong, getSongs } from "../store/actions/songActions";
import { getGenres} from '../store/actions/genreActions'
const { Option } = Select;

function Main(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [song, setSong] = useState("")
    const [artist, setArtist] = useState("")
    const [release, setRelease] = useState("")
    const [genre, setGenre] = useState("")

    const onChangeSong = value => {
        setSong(value.target.value)
    }

    const onChangeArtist = value => {
        setArtist(value.target.value)
    }

    const onChangeRelease = value => {
        console.log(value)
        setRelease(value.target.value)
    }

    const onChangeGenre = value => {
        setGenre(value)
    }

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    props.getGenresAction()
  },[])

  useEffect(()=>{
    props.getSongsAction()
  }, [])

  const handleOk = () => {
    props.createSongAction({
        artist,
        song,
        release,
        genre
    })
    setArtist("")
    setSong("")
    setRelease("")
    setGenre("")
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return(
        <section className="main">
                <Button type="primary" size={'large'} onClick={showModal}>
                        Add Song
                </Button>
                <View data={props.songs}></View>
                <Modal
                    title="Song Info"
                    visible={isModalOpen} 
                    footer={[
                    <Button key="back" onClick={handleCancel}>
                        Отмена
                    </Button>,
                    <Button key="submit" type="primary"  onClick={handleOk}>
                        Сохранить
                    </Button>,
                    ]}
                >
                    <Input placeholder="Artist name" value={artist} onChange={onChangeArtist}/>
                    <Input placeholder="Song name" value={song} onChange={onChangeSong}/>
                    <Input placeholder="Release date(year)" type="number" onChange={onChangeRelease} value={release}/>
                    <Select
                        showSearch
                        placeholder="Select a genre"
                        optionFilterProp="children"
                        onChange={onChangeGenre}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        value = {genre ? genre: null}
                    >
                    {props.genres.map(item => <Option value={item.id} key={item.id}>{item.genre}</Option>)}
                    </Select>
                    
                </Modal>
      </section>
    )
}

const mapDispatchToProps = dispatch => ({
    createSongAction: bindActionCreators(createSong, dispatch),
    getGenresAction: bindActionCreators(getGenres, dispatch),
    getSongsAction: bindActionCreators(getSongs, dispatch)
  })
  
  const mapStateToProps = state => ({
    genres: state.genresReducers.genres,
    songs: state.songsReducers.songs
  })
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Main)
  