#!/usr/bin/env
pipeline{
    agent any

    stages{
        stage('buildNumber'){
            steps{
                sh 'echo Hello this is the build number, fetching it from the pipeline global references'
                echo "Build number is ${currentBuild.number}"
            }
    }
}