import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [ping, setPing] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setPing(`Hello #${count}`), 500);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: '600' }}>MyFirstApp</Text>
        <Text>Count: {count}</Text>
        <Text>{ping ?? 'Waiting...'}</Text>
        <Button title="Increment" onPress={() => setCount(c => c + 1)} />
      </View>
    </SafeAreaView>
  );
}
