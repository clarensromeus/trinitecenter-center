// components/RetounenHeaderButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RetounenHeaderButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace("/(home)/(jwe)/")}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        padding: 6,
      }}
      activeOpacity={0.7}
    >
      <Ionicons name="arrow-back-outline" size={23} color="#4caf50" />
      <Text style={{ color: "#4caf50", fontSize: 21, fontWeight: '600', marginLeft: 4 }}>
        Retounen
      </Text>
    </TouchableOpacity>
  );
}
