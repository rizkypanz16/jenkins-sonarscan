pipeline {
  agent any

  stages {
    stage('Jenkins Slave 1') {
      steps {
        sh 'echo "run stage-1"'
        sh 'ls -l'
        sh '''
          sonar-scanner \
            -Dsonar.projectKey=jenkins-sonarscan \
            -Dsonar.sources=. \
            -Dsonar.host.url=http://192.168.7.151 \
            -Dsonar.login=sqp_011309b4c8fee7fa5e6311181dabe158da67fb48
        '''
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
