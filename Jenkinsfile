pipeline {
  agent any

  stages {
    stage('Deploy to Nodes') {
      stage('Jenkins Slave 1') {
        steps {
          sh 'echo "run stage-1"'
          sh 'ls -l'
        }
      }
      stage('Jenkins Slave 2') {
        steps {
          sh 'echo "run stage-2"'
          sh 'ls -l'
        }
      }
    }
  }
}
