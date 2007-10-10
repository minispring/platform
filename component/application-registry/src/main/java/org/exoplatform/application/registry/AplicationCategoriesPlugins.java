/***************************************************************************
 * Copyright 2001-2007 The eXo Platform SARL         All rights reserved.  *
 * Please look at license.txt in info directory for more license detail.   *
 **************************************************************************/
package org.exoplatform.application.registry;

import java.util.List;

import org.exoplatform.container.component.BaseComponentPlugin;
import org.exoplatform.container.configuration.ConfigurationManager;
import org.exoplatform.container.xml.InitParams;

/**
 * Created by The eXo Platform SARL
 * Author : Le Bien Thuy
 *          lebienthuy@gmail.com
 * 9 Oct 2007  
 */

public class AplicationCategoriesPlugins extends BaseComponentPlugin {
  private ConfigurationManager cmanager_ ;
  private ApplicationRegistryService pdcService_;  
  private List<?> configs;
  
  public AplicationCategoriesPlugins(ApplicationRegistryService pdcService,
                                 ConfigurationManager cmanager,                                        
                                 InitParams params) throws Exception {
    configs = params.getObjectParamValues(ApplicationCategory.class);
    cmanager_ = cmanager ;
    pdcService_ = pdcService;
    if(pdcService_.getApplicationCategories().size() > 0) return ;
    for (Object ele : configs) {
      ApplicationCategory portalConfig  = (ApplicationCategory)ele;
      pdcService.save(portalConfig);
      List<Application> apps = portalConfig.getApplications();
      for(Application app: apps) pdcService.save(portalConfig, app);
    }
  }

}
