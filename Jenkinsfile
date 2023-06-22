pipeline {
  agent any

  stages {
    stage('Deploy to Nodes') {
      parallel {
        stage('Jenkins Slave 1') {
          steps {
            sh 'echo "run stage-1"'
          }
        }
        stage('Jenkins Slave 2') {
          steps {
            sh 'echo "run stage-2"'
          }
        }
      }
    }
  }
}
