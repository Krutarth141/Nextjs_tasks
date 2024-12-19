import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome for user icon
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Login Screen
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [name, setName] = useState('Krutarth Trivedi');  

  const handleNext = () => {
    if (email) {
      setIsEmailEntered(true);
    }
  };

  const handleLogin = () => {
    if (password) {
      navigation.replace('Dashboard', { userEmail: email, userName: name });
    }
  };

  return (
    <View style={styles.container}>
      {!isEmailEntered ? (
        <>
          <Text style={styles.label}>Enter Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button title="Next" onPress={handleNext} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Enter Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}  
          />

          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};


// Feed Screen with AI News and Images
const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* AI News Article 1 */}
      <View style={styles.newsContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x200.png?text=AI+Healthcare' }} 
          style={styles.image}
        />
        <Text style={styles.headline}>AI Revolutionizing Healthcare with Deep Learning</Text>
        <Text style={styles.description}>
          AI is making strides in the healthcare industry by utilizing deep learning models to detect diseases earlier and more accurately than ever before.
        </Text>
      </View>

      {/* AI News Article 2 */}
      <View style={styles.newsContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x200.png?text=GPT-5+AI' }} 
          style={styles.image}
        />
        <Text style={styles.headline}>OpenAI Launches GPT-5: The Future of Natural Language Processing</Text>
        <Text style={styles.description}>
          OpenAI has launched GPT-5, which promises even more advanced natural language understanding and generation capabilities, opening new possibilities for AI applications.
        </Text>
      </View>

      {/* AI News Article 3 */}
      <View style={styles.newsContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x200.png?text=AI+Autonomous+Vehicles' }} 
          style={styles.image}
        />
        <Text style={styles.headline}>AI in Autonomous Vehicles: Progress and Challenges</Text>
        <Text style={styles.description}>
          AI continues to drive advancements in autonomous vehicle technology, but challenges remain in ensuring safety, reliability, and ethics in self-driving cars.
        </Text>
      </View>
    </ScrollView>
  );
};


const MessagingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Messaging</Text>
      <Text>No messages yet.</Text>
    </View>
  );
};


const ProfileScreen = ({ route, navigation }) => {
  const { userEmail, userName } = route.params;

  const handleLogout = () => {
    navigation.replace('Login');  
  };

  return (
    <View style={styles.profileContainer}>
      <Icon name="user-circle" size={80} color="#4A90E2" style={styles.userIcon} />

      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.profileInfo}>Age: 21</Text>
      <Text style={styles.profileInfo}>Role: AI Software Developer @ 4Good.ai</Text>


      <Text style={styles.profileInfo}>Logged in as: {userEmail}</Text>


      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};



const Dashboard = ({ route, navigation }) => {
  const { userEmail, userName } = route.params;


  const handleLogout = () => {
    navigation.replace('Login');  
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'rss';
          } else if (route.name === 'Messaging') {
            iconName = 'comments';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messaging" component={MessagingScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ userEmail, userName }}
        
        listeners={{
          tabPress: () => {
          },
        }}
      />
    </Tab.Navigator>
  );
};



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  userIcon: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  profileInfo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  logoutButtonContainer: {
    marginTop: 20,
    width: '100%',
  },
  newsContainer: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    width: '100%',
    marginBottom: 16,
  },
});

export default App;
