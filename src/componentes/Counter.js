import { Component } from "react";
import { Button, Text, StyleSheet, View, TextInput } from "react-native";

export default class Counter extends Component {
    state = {
        count: 0,
        step: 2,
    };

    incrementar() {
        this.setState({
            count: this.state.count + this.state.step,
        });
    }

    decrementar() {
        if (this.state.count > this.props.min || this.props.min == undefined) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }
    alteraStep(text) {
        this.setState({ step: parseInt(text) });
    }
    render() {
        return (
            <View style={StyleSheet.contador}>
                <TextInput 
                    value={this.state.step.toString()}
                    onChange={(e) => {
                        this.alteraStep(e.nativeEvent.text);
                    }}
                />
                <TextInput 
                    defaultValue={this.state.step.toString()}
                    onChange={(e) => {
                        this.alteraStep(valor);
                    }}
                />
                <Text>Contador: { this.state.count }</Text>
                <Button onPress={() => this.incrementar ()} title="+" />
                <Button onPress={() => this.decrementar ()} title="-" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alingItems: 'center',
    },
});