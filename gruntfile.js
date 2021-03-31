module.exports = (grunt) =>{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['style/']
                },
                files: {
                    'style/style.css' : 'style/less/style.less'
                }
            }
        },
        watch:{
            tasks: ['less'],
            files: "**/*.less"
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    
    grunt.registerTask('default', ['watch'])
}