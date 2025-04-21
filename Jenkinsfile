pipeline {
    agent any
    
    stages {
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Esperar resultados') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }

    post {
        success {
            echo 'Análisis SAST finalizado correctamente.'
        }
        failure {
            echo 'Falló el análisis o la calidad del código no es aceptable.'
        }
    }
}

