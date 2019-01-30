import React from 'react';
import {Avatar, Button, Div, Group, ListItem, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foo: localStorage.getItem('foo'),
        };

        this.setFoo = this.setFoo.bind(this);
        this.clearFoo = this.clearFoo.bind(this);
    }

    setFoo() {
        let newValue = Math.round(Math.random() * 100);
        this.setState({
            foo: newValue
        }, () => {
            localStorage.setItem('foo', newValue);
        });

    }

    clearFoo() {
        let newValue = 0;
        this.setState({
            foo: newValue
        }, () => {
            localStorage.setItem('foo', newValue);
        });

    }

    render() {
        return (
            <View activePanel="main">
                <Panel id="main">
                    <PanelHeader>Local storage test</PanelHeader>
                    <Group>
                        <Div>
                            Value: {this.state.foo}
                        </Div>
                        <Div>
                            <Button size="m" level="primary" onClick={this.setFoo}>
                                Set new value
                            </Button>
                            <span> </span>
                            <Button size="m" level="secondary" onClick={this.clearFoo}>
                                Clear
                            </Button>
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
