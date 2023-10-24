import {StyleSheet, Text, View, Image, TextInput, FlatList, TouchableHighlight, ActivityIndicator,SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react'
import axios from 'axios';

const src = "https://rickandmortyapi.com/api/character";
export default function Main({navigation}) {
    let countLastCharacter = 0
    const [showLoader, setShowLoader] = useState(true)
    const [characters, setCharacters] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [loadNumberPage, setLoadNumberPage] = useState(1)
    useEffect(() => {
        console.log(loadNumberPage)
        axios
            .get(`https://rickandmortyapi.com/api/character`, {params: {page: loadNumberPage, name: filterText}})
            .then(data => {
                countLastCharacter = data.data.info.count
                setCharacters([...characters, ...data.data.results]);
            })
            .finally(() => {
                    setShowLoader(false)
                }
            )

    }, [loadNumberPage, filterText]);

    const changeText = (text) => {
            setShowLoader(true)
            setCharacters([])
            setFilterText(text)
            setLoadNumberPage(1);
    }

    const tapedView = (item) => {
        navigation.navigate("Character", {item})
    }

    const loadMore = () => {
        if (countLastCharacter < characters.length) {
            setLoadNumberPage(loadNumberPage + 1)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => changeText(text)}
                value={filterText}
                placeholder="Введите имя"
            />
            {showLoader ? <ActivityIndicator style={styles.flatList} size="large" color="#050510"/> : <FlatList
                data={characters}
                onEndReachedThreshold={1}
                onEndReached={loadMore}
                style={styles.flatList}
                ListEmptyComponent={
                    <View style={styles.emptyView}>
                        <Text style={styles.title}>Мы никого не нашли</Text>
                        <Text style={styles.subTitle}>Попробуй скорректировать запрос</Text>
                    </View>
                }
                renderItem={({item}) =>
                    <TouchableHighlight
                        activeOpacity = {.95}
                        onPress={() => tapedView(item)}
                    >
                        <View key={item.id} style={styles.item}>
                            <Image
                                style={styles.characterLogo}
                                source={{
                                    uri: item.image,
                                }}
                            />
                            <Text style={styles.titleCharacter}>{item.name}</Text>

                        </View>
                    </TouchableHighlight>
                }
            />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    titleCharacter: {
        fontSize: 20,
        color: '#050510',
        fontWeight: "bold",
        marginLeft: 16,
        marginRight: 100
    },
    characterLogo: {
        width: 72,
        height: 72,
        borderRadius: 36,
        margin: 5,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    flatList: {
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderColor: "gray",
        height: 50,
        borderWidth: 1,
        borderRadius: 18,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 12,
    },
    subtitle: {
        background: '#97979B',
        fontSize: 22,
    },

    emptyView: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'

    }
});
