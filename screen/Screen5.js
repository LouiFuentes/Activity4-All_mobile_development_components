import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
      source={require('../assets/pic.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Loui Fuentes</Text>
      <Text style={styles.title}>App Developer and Designer</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>Canangcaan, Corella, Bohol</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>louifuentes@email.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>(0912-345-6789)</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.sectionContent}>

           As an app developer and designer, I am responsible for designing and coding functional software programs and applications. 
           I work on a variety of platforms, such as Android or iOS, and I use a variety of programming languages and tools.
      </Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>JavaScript</Text>
       
        <Text style={styles.skill}>UI/UX Design</Text>
        <Text style={styles.skill}>HTML</Text>
        
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    backgroundColor: '#fdf5e6',
    paddingVertical: 170,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'maroon'
  },
  title: {
    fontSize: 15,
    color: 'gray',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  infoValue: {
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    margin: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,

  },
  skill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 6,
    borderRadius: 20,
    backgroundColor: 'orange',
    color: '#fff',
  },
  experienceItem: {
    marginTop: 10,
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experienceDate: {
    color: '#777',
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
