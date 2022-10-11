import { Table, Input, Select, Button,Space } from 'antd';
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGenres} from '../store/actions/genreActions'
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;



const View = (props) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});


  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [count,  setCount] = useState(3);
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    console.log(selectedKeys)
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };


  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const onChangeCount = e =>{
       setCount(e)
  }
  
  console.log(props.data)

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
       dataIndex === 'genres' ?
          record[dataIndex].genre.toString().toLowerCase().includes(value.toLowerCase()) :
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ?  (
        text
      ): null
  });

  const columns = [
    {
      title: 'Исполнитель',
      dataIndex: 'artist',
      key: 'artist',
      ...getColumnSearchProps('artist'), 
      render: (item) => <p>{item}</p>,     
      sorter: (a, b) => a.artist.localeCompare(b.artist),
      sortOrder: sortedInfo.columnKey === 'artist' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Песня',
      dataIndex: 'song',
      key: 'song',
      sorter: (a, b) => a.song.localeCompare(b.song),
      sortOrder: sortedInfo.columnKey === 'song' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Жанр',
      dataIndex: 'genres',
      key: 'genre',
      ...getColumnSearchProps('genres'),
      render: (item) => <p>{item && item.genre}</p>,
      ellipsis: true,
    },

    {
        title: 'Год',
        dataIndex: 'release',
        key: 'release',
        ...getColumnSearchProps('release'),
        render: (item) => <p>{item}</p>, 
        sorter: (a, b) => a.release - b.release,
        sortOrder: sortedInfo.columnKey === 'release' ? sortedInfo.order : null,
        ellipsis: true,
      },
  ];
  return (
    <>
      <Table 
      columns={columns} 
      dataSource={props.data} 
      onChange={handleChange}  
      pagination={{
        pageSize: count,
      }}/>
        <Select
              showSearch
              placeholder="Select a count"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={onChangeCount}
            >
              <Option value="3">3</Option>
              <Option value="6">6</Option>
              <Option value="9">9</Option>
        </Select>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  getGenresAction: bindActionCreators(getGenres, dispatch),
})

const mapStateToProps = state => ({
  genres: state.genresReducers.genres,
})
export default connect(mapStateToProps, mapDispatchToProps)(View);
