package com.coinlab;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.modelmapper.ModelMapper;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@MapperScan(value = {"com.coinlab"})
@EnableJpaAuditing
public class CoinlabApplication {
 
	public static void main(String[] args) {
		SpringApplication.run(CoinlabApplication.class, args);
	}
	
	@Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource)throws Exception{
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
            sessionFactory.setDataSource(dataSource);
            
            Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath:mappers/*Mapper.xml");
            
            sessionFactory.setMapperLocations(res);          
            return sessionFactory.getObject();
    }

    @Bean
    public ModelMapper modelMapper() {
	    return new ModelMapper();
    }
}
   