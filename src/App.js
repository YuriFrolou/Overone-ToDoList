import './App.css';
import React from "react";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import Info from "./components/Info/Info";
import AddForm from "./components/AddForm/AddForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    task: 'Learn HTML',
                    done: true,
                    id: 1
                },
                {
                    task: 'Learn CSS',
                    done: true,
                    id: 2
                },
                {
                    task: 'Learn JS',
                    done: false,
                    id: 3
                }
            ],
            filter: 'all'
        };
        this.maxId = 4;
    }

    setFilter = (filter) => {
        this.setState({filter});
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    };

    onToggleProps = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop]
                    }
                }
                return item;
            })
        }));
    };

    filterPost = (filter, items) => {
        switch (filter) {
            case 'current':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    };

    addItem = (task) => {
        const newItem = {
            task,
            done: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    };

    render() {
        const {filter, data} = this.state;
        const total = this.state.data.length;
        const done = this.state.data.filter(i => i.done).length;
        const visibleData = this.filterPost(filter, data);
        return (
            <div className="app">
                <Info total={total} done={done}/>
                <div className="search-panel">
                    <Filter filter={filter} setFilter={this.setFilter}/>
                </div>
                <List data={visibleData} onDelete={this.deleteItem} onToggleProps={this.onToggleProps}/>
                <AddForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
