import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, ActivityIndicator } from 'react-native';

async function delay(timeout: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok")
    }, timeout);
  })
}

type CryptoData = {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
}

export default function App() {
  const [coins, setCoins] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFetchCrypto() {
    setLoading(true)
    try {
      await delay(3000)

      const request = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
        method: "GET",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
        },
      })
      
      const data = await request.json()
      setCoins(data)
    } catch (e: any) {
      console.error(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Carregando dados da API... Aguarde</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guia Cripto</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleFetchCrypto}>
        <Text style={styles.buttonText}>Baixar Moedas</Text>
      </TouchableOpacity>

      {coins.length === 0 ? (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>Dados não baixados</Text>
        </View>
      ) : (
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.coinCard}>
              <Image source={{ uri: item.image }} style={styles.coinImage} />
              <View>
                <Text style={styles.coinName}>{item.name} ({item.symbol.toUpperCase()})</Text>
                <Text style={styles.coinPrice}>U$ {item.current_price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  list: {
    flex: 1,
  },
  coinCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  coinImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  coinName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  coinPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});